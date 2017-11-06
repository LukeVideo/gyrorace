

// LED vars 
const int ledPin = 13;
const int pwmPin = 3;

// LED read vars
String inputString = "";         // a string to hold incoming data
boolean toggleComplete = false;  // whether the string is complete
boolean pwmComplete = false;  

// Potmeter vars
const int digitalInPin = 10;
int sensorValue = 0;        // value read from the potmeter
int prevValue = 0;          // previous value from the potmeter

/* jimi's mods*/
const int gyroLed = 2;      // LED on top of the controler.
const int minNb = 2;        // Minimum number of laps before acceleration
int cpt = 0;
long temps;

void setup() {
  // initialize serial:
  Serial.begin(9600);
  // init LEDS
  pinMode(ledPin,OUTPUT);
  pinMode(pwmPin,OUTPUT);
  digitalWrite(ledPin,0);
  analogWrite(pwmPin,0);

  pinMode(digitalInPin, INPUT);

  pinMode(gyroLed,OUTPUT);

  /* jimi's mods*/
  temps = millis();         // Time initialization.
}

void loop() {
    // state PhotoCaptor

    sensorValue = digitalRead(digitalInPin);
    delay(50);
    // read the analog in value:
    if(prevValue != sensorValue){
      prevValue = sensorValue;

    /* jimi's mods*/
    if (sensorValue == 1) {
      cpt++;
    }
    Serial.print("B"); // begin character
    Serial.print(cpt);
    Serial.print("E"); // end character
    Serial.print('\n');

  }/* jimi's mods*/
  else {
    if((millis() - temps) > 500) {  // If time elapsed is greater than 500 ms
      if(cpt > 0) {
        cpt--;
        }
      Serial.print("B"); // begin character
      Serial.print(cpt);
      Serial.print("E"); // end character
      Serial.print('\n');
      temps = millis();
      } 
    }

  if (cpt >= minNb) {
      digitalWrite(gyroLed, HIGH);
    }
  else {
    digitalWrite(gyroLed, LOW);
  }
   
  delay(50); // give the Arduino some breathing room.
}

int stringToInt()
{
    char charHolder[inputString.length()+1];
    inputString.toCharArray(charHolder,inputString.length()+1);
    inputString = "";
    int _recievedVal = atoi(charHolder);
    return _recievedVal;
}
