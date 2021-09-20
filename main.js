import java.io.IOException;
import java.io.Reader;
import java.io.InputStreamReader;
import java.io.BufferedReader;

// 
// Decompiled by Procyon v0.5.36
// 

public final class a
{
    private static BufferedReader a;
    
    static {
        a.a = new BufferedReader(new InputStreamReader(System.in));
    }
    
    public static int a(final String s, final int n, final int n2) {
        int int1 = 0;
        int i;
        do {
            i = 1;
            System.out.print(s);
            try {
                int1 = Integer.parseInt(a.a.readLine());
            }
            catch (IOException ex) {
                i = 0;
            }
            catch (NumberFormatException ex2) {
                i = 0;
            }
            if (i != 0 && (int1 < n || int1 > n2)) {
                i = 0;
            }
            if (i == 0) {
                if (n2 == Integer.MAX_VALUE && n == -2147483647) {
                    System.out.format("\nERROR: Input must be an integer in [-infinity, infinity]!\n\n", new Object[0]);
                }
                else if (n2 == Integer.MAX_VALUE) {
                    System.out.format("\nERROR: Input must be an integer in [%d, infinity]!\n\n", n);
                }
                else if (n == -2147483647) {
                    System.out.format("\nERROR: Input must be an integer in [-infinity, %d]!\n\n", n2);
                }
                else {
                    System.out.format("\nERROR: Input must be an integer in [%d, %d]!\n\n", n, n2);
                }
            }
        } while (i == 0);
        return int1;
    }
    
    public static double a(final String s, final double n, final double d) {
        double double1 = 0.0;
        int i;
        do {
            i = 1;
            System.out.print(s);
            try {
                double1 = Double.parseDouble(a.a.readLine());
            }
            catch (IOException ex) {
                i = 0;
            }
            catch (NumberFormatException ex2) {
                i = 0;
            }
            if (i != 0 && (double1 < 0.0 || double1 > d)) {
                i = 0;
            }
            if (i == 0) {
                if (d == Double.MAX_VALUE) {
                    System.out.format("\nERROR: Input must be a real number in [%.2f, infinity]!\n\n", 0.0);
                }
                else {
                    System.out.format("\nERROR: Input must be a real number in [%.2f, %.2f]!\n\n", 0.0, d);
                }
            }
        } while (i == 0);
        return double1;
    }
    
    public static String a(String line) {
        System.out.print(line);
        line = "";
        try {
            line = a.a.readLine();
        }
        catch (IOException ex) {
            ex.printStackTrace();
        }
        return line;
    }
}
