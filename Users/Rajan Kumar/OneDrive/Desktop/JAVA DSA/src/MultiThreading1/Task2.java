package MultiThreading1;

public class Task2 implements  Runnable{
    @Override
    public void run()
    {
        for(int i=0; i<=100; ++i)
        {
            if(i%2!=0)
            {
                System.out.println(i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e)
                {
                    e.printStackTrace();
                }
            }
        }
    }

}