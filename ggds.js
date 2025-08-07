import time
import sys

def running_text(text, speed):
    for char in text:
        print(char, end='', flush=True)
        time.sleep(speed)
    print("\n")

def countdown(start=1, end=3, delay=1.5):
    for i in range(start, end + 1):
        print(i)
        time.sleep(delay)
    print()

lyrics = [
    ("ondeh uda janlah baitu bana", 0.05, 2.2),
    ("denai ko indaklah nan sarupo ituu", 0.04, 2.2),
    ("dek hanyo takuik mancaliak udaa", 0.06, 2.2),

    ("acok mabuak mabuakan", 0.05, 3.2),
    ("dulu denai la suka mancaliak uda bakawan", 0.04, 2.2),
    ("raso raso ko ado", 0.06, 6.0),

    ("tapi denai diam kan", 0.05, 5.7)
]

countdown()

for line, type_speed, line_delay in lyrics:
    running_text(line, type_speed)
    time.sleep(line_delay)
