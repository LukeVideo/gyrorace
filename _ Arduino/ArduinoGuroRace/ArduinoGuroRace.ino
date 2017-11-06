

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

/* jimi */
const int gyroLed = 2;
//const int gyroLed = 13;
const int minNb = 2;        // Minimum nomber of laps before acceleration
int cpt = 0;
//const int buttonPin = 2;     // the number of the pushbutton pin
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

  /* jimi */
  //pinMode(buttonPin, INPUT);
  temps = millis();      // on initialise le temps
}

void loop() {
/*
  digitalWrite(gyroLed, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(gyroLed, LOW);    // turn the LED off by making the voltage LOW
  delay(1000); 
 */
    // state PhotoCaptor
    /* jimi
     *  sensorValue = digitalRead(buttonPin);
    */
    sensorValue = digitalRead(digitalInPin);
    delay(50);
    // read the analog in value:
    if(prevValue != sensorValue){
      //Serial.print("B"); // begin character 
      //Serial.print(sensorValue);  
      //Serial.print("E"); // end character
      prevValue = sensorValue;
      //Serial.print('\n');
/*
      // turn on the led if the photocaptor value is 1
      if (sensorValue == 1) {
        digitalWrite(gyroLed, HIGH);
        } 
      else {
        digitalWrite(gyroLed, LOW);
        } 
   }
    */
    /* jimi */
    if (sensorValue == 1) {
      cpt++;
    }
    Serial.print("B"); // begin character
    Serial.print(cpt);
    Serial.print("E"); // end character
    Serial.print('\n');

  }/* jimi */
  else {
    if((millis() - temps) > 500) {
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
