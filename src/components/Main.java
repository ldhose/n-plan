package components;

public class Main {
    /**
     * @throws InterruptedException 
     * 
     */
    public static void main() throws InterruptedException {

        Timer timer = new Timer(0, 0, 10, false);

        while (!timer.expired) {
            timer = tick(timer);
            System.out.println(timer);
            Thread.sleep(1000);
        
        }


    }

    private static Timer tick(Timer timer) {
        if(timer.sec > 0) {
            return new Timer(timer.hour(), timer.minute(), timer.sec() - 1, timer.expired());
        } else {
            return ticMinute(timer);
        }

    }

    private static Timer ticMinute(Timer timer) {
        if(timer.minute() > 0) {
            return new Timer(timer.hour(), timer.minute() - 1, 0, timer.expired());
        } else {
            return tickHour(timer);
        }
    }

    private static Timer tickHour(Timer timer) {
        if(timer.hour() > 0) {
            return new Timer(timer.hour() -1 , 0, 0, timer.expired());
        } else {
            return new Timer(0, 0, 0, true);
        }
    }

    public static record Timer(int hour, int minute, int sec, boolean expired) {
    }
}
