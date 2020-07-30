export default interface ICreateAppointmentDTO {
  category: string;
  description: string;
  latitude: number;
  longitude: number;
  user_id: string;
  date: Date;
}
