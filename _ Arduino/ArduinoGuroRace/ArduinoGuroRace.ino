

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

void setup() {
  // initialize serial:
  Serial.begin(9600);
  // init LEDS
  pinMode(ledPin,OUTPUT);
  pinMode(pwmPin,OUTPUT);
  digitalWrite(ledPin,0);
  analogWrite(pwmPin,0);

  pinMode(digitalInPin, INPUT);
}

void loop() {


 
    // state PhotoCaptor
    sensorValue = digitalRead(digitalInPin);
    delay(50);  
    // read the analog in value:
    if(prevValue != sensorValue){
      Serial.print("B"); // begin character 
      Serial.print(sensorValue);  
      Serial.print("E"); // end character
      prevValue = sensorValue;
      Serial.print('\n');
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
