# Timer Component

## Environment 

- Vue Version: ^3.0.0
- Node Version: v12 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/c0CimlG_Fio4td5b1qu7FQ/timer.gif)

## Functionality Requirements
The component has the following functionalities:

- The timer value decreases by 1 every second. For example, if the initial value is 100, after 1 second it becomes 99, after 1 more second it becomes 98, and so on.
- The timer value starts decreasing right after the component is mounted.
- The initial value of the timer is set by a prop 'initial' passed down to the component.
- Once the counter value becomes 0, it should not decrease further.
- The button 'Stop Timer' stops the timer at the current value. For example, if the initial value was 120, and the button is pressed at 110, the timer stops at value 110.

## Testing Requirements
The following data-testid attributes are required in the component for the tests to pass:

- Timer value should have the data-testid attribute 'timer-value'.
- Stop timer button should have the data-testid attribute 'stop-button'.

Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

## Project Specifications

**Read Only Files**
- `__tests__/*`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
