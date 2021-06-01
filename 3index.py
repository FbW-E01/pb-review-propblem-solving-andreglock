import time
import datetime as dt
import random

def dummyDataGenerator (digits, start, end):
    initial = time.mktime(dt.datetime.strptime(start, "%d/%m/%Y").timetuple())
    final = time.mktime(dt.datetime.strptime(end, "%d/%m/%Y").timetuple())
    randomDate = ((final - initial) * random.random()) + initial
    dateFormat = str(dt.datetime.fromtimestamp(randomDate))
    idNumber = str(round(random.random(), digits))

    class Output:
        id = idNumber[2:]
        time = dateFormat[0:19] + ' UTC'

    return Output



# Time 1 million times - about 22 seconds
start_time = time.time()
for i in range (0, 1000000):
    dummyDataGenerator(3, "01/01/2011", "01/06/2021")
print("test: %.04s s" % (time.time() - start_time))