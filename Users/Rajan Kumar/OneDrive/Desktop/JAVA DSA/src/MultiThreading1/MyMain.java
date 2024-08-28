package MultiThreading1;

public class MyMain {
    public static void main(String[] args) {
        Runnable task1= new Task1();
        Runnable task2=new Task2();

        Thread t1=new Thread(task1);
        Thread t2=new Thread(task2);

        t1.start();
        t2.start();

    }
}
