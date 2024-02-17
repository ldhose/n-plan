export type TimerInstance = {
    id: number,
    text: string;
    minute: number;
    remainingSeconds: number;
    expired: boolean;
    notified: boolean;
  };