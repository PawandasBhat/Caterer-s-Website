#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int people[8] = {1, 2, 3, 4, 5, 6, 7, 8};
    int i, j, temp;

    srand(time(NULL));

    for (i = 0; i < 8; i++) {
        j = i + rand() % (8 - i);
        temp = people[i];
        people[i] = people[j];
        people[j] = temp;
    }

    for (i = 0; i < 8; i++) {
        printf("4MK24MC00%d gets Question number %d\n", i + 1, people[i]);
    }

    return 0;
}
