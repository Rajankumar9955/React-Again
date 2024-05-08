//operator

import java.util.Scanner;
class opr{
  public static void main(String args[]){
Scanner rk=new Scanner(System.in);
System.out.println("Enter the number:");
int a=rk.nextInt();

 int hun=a%100;
 System.out.println(hun);
 int fifty;
 fifty=a%hun/50;
 System.out.println(fifty);
  int twenty;
twenty=a%hun%fifty/20;
System.out.println(twenty);
int ten=a%hun%fifty%twenty%10;
System.out.println(ten);
int five=a%hun%fifty%twenty%ten/5;
System.out.println(five);
int two=a%hun%fifty%twenty%ten/2;
System.out.println(two);
int one=a%hun%fifty%twenty%ten%two/1;
System.out.println(one);

}
}




      