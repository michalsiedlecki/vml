# 🥒 Cucumber vs Test.Steps  

This repository was created as part of a recruitment task. It demonstrates two approaches to testing:  

- **Cucumber** (located in the `features` folder)  
- **Test Steps** (located in the `tests` folder)  

## 📝 Test Scenarios  

1. **UI-Based Test:**  
   - Opens a webpage  
   - Enters an email address  
   - Clicks on "Forgot password"  
   - Logs into Gmail  
   - Clicks the password reset link  

2. **API-Based Test:**  
   - Uses an email service API  
   - Checks for the password reset email  
   - Avoids front-end interactions  

## 🚀 How to Run the Tests  

```sh
# Example commands (update according to your setup)
npm install
npm test

