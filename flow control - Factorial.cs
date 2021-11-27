using System;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            //este ejercicio es de recursibidad que nos ayudara a calcular los factoriales

            Console.Write("numero del factorial: ");
            int valor = int.Parse(Console.ReadLine());
            Console.WriteLine(Factorial(valor));
            Console.ReadLine();
           
        }
        public static int Factorial(int n)
        {
            //esto es una funcion la cual sera llamada todo el tiempo hasta llegar al caso base
            if (n==1) //caso base, esto evita que la operacion llegue hasta el "infito"
            {
                return n;
            }
            else
            {
                return n * Factorial(n - 1);
            }
        }
    }
}
