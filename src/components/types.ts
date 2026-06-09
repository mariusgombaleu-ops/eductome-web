export interface TimetableSlot {
  id: string;
  dayOfWeek: 'Lundi' | 'Mardi' | 'Mercredi' | 'Jeudi' | 'Vendredi' | 'Samedi';
  startTime: string;
  endTime: string;
  subjectId: string;
  subjectName: string;
  teacherName?: string;
  roomNumber?: string;
}

export interface AssessmentEvent {
  id: string;
  title: string;
  type: 'INTERRO' | 'DEVOIR' | 'BAC_BLANC';
  subjectId: string;
  subjectName: string;
  date: string;
  tomeIdLinked?: string;
  reminderEnabled: boolean;
  status: 'UPCOMING' | 'SUCCESS' | 'FAILED' | 'PENDING_REVIEW';
  studentScore?: number;
  reviewComment?: string;
  createdAt: number;
}
