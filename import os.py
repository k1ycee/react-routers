import os
import sys

#
# Complete the simpleArraySum function below.
#
def simpleArraySum(ar):
    ar = int(input('How many numbers do you want to sum: '))
    for n in ar:
        while n < ar:
            n = n + n

       if __name__ == '__main__':
           fptr = open(os.environ['OUTPUT_PATH'], 'w')

           ar_count = int(input())

           ar = list(map(int, input().rstrip().split()))

           result = simpleArraySum(ar)

           fptr.write(str(result) + '\n')

           fptr.close()
