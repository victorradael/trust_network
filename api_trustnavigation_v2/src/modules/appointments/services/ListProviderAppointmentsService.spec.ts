import 'reflect-metadata';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProviderAppointments: ListProviderAppointmentsService;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
      fakeCacheProvider
    );
  });
  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      category: 'Policia',
      description: 'hjsgdfhjgsdf',
      longitude: 12345687,
      latitude: 12345687,
      user_id: 'user',
      date: new Date(2020, 7, 20, 13, 0, 0),
    });

    const appointment2 = await fakeAppointmentsRepository.create({
      category: 'Policia',
      description: 'hjsgdfhjgsdf',
      longitude: 12345687,
      latitude: 12345687,
      user_id: 'user',
      date: new Date(2020, 7, 20, 14, 0, 0),
    });

    const appointments = await listProviderAppointments.execute({
      provider_id: 'user',
      day: 20,
      month: 8,
      year: 2020,
    });

    await expect(appointments).toEqual([appointment1, appointment2]);
  });
});
