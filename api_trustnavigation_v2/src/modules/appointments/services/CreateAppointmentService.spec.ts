import 'reflect-metadata';

import CreateAppointmentService from './CreateAppointmentService';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

import AppError from '@shared/error/AppError';

let fakeAppointmentsRepository: FakeAppointmentsRepository;

let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository
    );
  });
  it('should be able to create a new appointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    const appointment = await createAppointment.execute({
      user_id: 'user-id',

      date: new Date(2020, 4, 10, 13),
    });

    expect(appointment).toHaveProperty('id');
  });

  it('should not be able to create an appointment on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });

    await expect(
      createAppointment.execute({
        user_id: 'user-id',
        date: new Date(2020, 4, 10, 10),
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
