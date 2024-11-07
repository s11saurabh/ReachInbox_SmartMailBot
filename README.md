# ReachInbox SmartMailBot

ReachInbox SmartMailBot is a tool designed to automate email parsing, categorization, and responses for both Gmail and Outlook. Using OAuth for secure email access and OpenAI's language model for intelligent responses, it categorizes incoming emails and sends appropriate automated replies based on the context. It leverages BullMQ for task scheduling and is built with TypeScript.

## Features

- **OAuth Integration**: Securely connects to Gmail and Outlook email accounts using OAuth.
- **Email Categorization**: Analyzes incoming emails and assigns labels based on content.
- **Automated Responses**: Suggests and sends replies automatically based on email context.
- **Task Scheduling**: Uses BullMQ to handle scheduling tasks efficiently.
- **Contextual Understanding**: Utilizes OpenAI for email context understanding and label assignment.

## Demo Link
You can access a live demo of the tool here: [ReachInbox SmartMailBot](https://saurabh-reachinbox.onrender.com/)

## GitHub Repository
View the source code on GitHub: [s11saurabh/ReachInbox_SmartMailBot](https://github.com/s11saurabh/ReachInbox_SmartMailBot)

---

## Project Structure

```plaintext
├── config/               # Configuration files (OAuth, environment variables, etc.)
├── controllers/          # Handles API requests and business logic
├── public/               # Public assets (HTML, CSS, JS for frontend)
├── routes/               # Defines API routes
├── services/             # Email services, OpenAI integrations, and BullMQ job handlers
├── index.js              # Main server file
├── package.json          # Project dependencies and scripts
└── package-lock.json     # Lock file for dependencies
```

---

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- A **Google Cloud Platform** and **Microsoft Azure** account to configure OAuth for Gmail and Outlook.
- **OpenAI API Key** for generating automated responses.
- **Redis** for BullMQ task scheduling.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/s11saurabh/ReachInbox_SmartMailBot.git
   cd ReachInbox_SmartMailBot
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
3.### Configure Environment Variables
Create a `.env` file in the root directory and add the following variables:

```plaintext
# Google OAuth Configuration
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
GOOGLE_REDIRECT_URI=<your_google_redirect_uri>
GOOGLE_REFRESH_TOKEN=<your_google_refresh_token>

# Outlook OAuth Configuration
OUTLOOK_CLIENT_ID=<your_outlook_client_id>
OUTLOOK_CLIENT_SECRET=<your_outlook_client_secret>

# OpenAI API Key
OPENAI_API_KEY=<your_openai_api_key>

# Redis Configuration
REDIS_HOST=<your_redis_host>
REDIS_PORT=<your_redis_port>
REDIS_PASS=<your_redis_password>
```


4. **Run the Application**:
   ```bash
   npm start
   ```

---

## Usage

### 1. Connecting Email Accounts
   - The tool allows users to connect their Gmail and Outlook accounts using OAuth authentication.
   - During the demo, authorize access to Gmail and Outlook accounts for the tool to read incoming emails.

### 2. Reading and Categorizing Emails
   - Once connected, the tool monitors new emails and categorizes them based on the content. The available labels are:
     - **Interested**
     - **Not Interested**
     - **More Information**

### 3. Automatic Replies
   - The tool uses OpenAI's API to generate contextual responses based on the label:
     - **Interested**: Sends a message expressing interest in arranging a demo call.
     - **Not Interested**: Sends a polite thank-you response.
     - **More Information**: Provides additional details or asks for clarification.
   
### 4. Task Scheduling
   - BullMQ is used to queue and schedule tasks, ensuring efficient email parsing and response handling.

---

## Example Scenarios

- **Scenario 1**: If an incoming email expresses interest in learning more, the tool categorizes it as **Interested** and replies with a request to schedule a demo.
- **Scenario 2**: For emails requesting more information, it categorizes them as **More Information** and responds with additional details or questions.
- **Scenario 3**: If an email indicates disinterest, it labels it as **Not Interested** and sends a polite thank-you message.

---

## Tech Stack

- **TypeScript**: Strongly typed JavaScript for robust code.
- **Node.js & Express**: Backend server and API.
- **BullMQ**: Task scheduling and job queue.
- **OAuth2.0**: Secure email access for Gmail and Outlook.
- **OpenAI API**: For understanding email content and generating responses.
- **Redis**: Data storage for BullMQ.

---

## Live Demo Steps

1. **Connecting Accounts**: Showcase connecting a Gmail and Outlook account using OAuth.
2. **Sending an Email**: Send a sample email to the connected accounts.
3. **Email Parsing**: Show how the tool categorizes the email based on the content.
4. **Automated Reply**: Demonstrate the tool's ability to send an automatic reply based on the assigned label.

---

## Future Enhancements

- **Advanced Categorization**: Add more categories to enhance the granularity of responses.
- **Custom Responses**: Allow customization of response templates.
- **Analytics Dashboard**: Provide insights into email categories and responses.
- **Multi-language Support**: Extend support for multiple languages.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- **BullMQ** for task scheduling.
- **OpenAI** for contextual understanding and response generation.
- **OAuth2.0** for secure authentication with Gmail and Outlook.

---

For any questions or support, please contact the project maintainer.

---

**Note**: Ensure to test with sample Gmail and Outlook accounts to avoid conflicts with personal or sensitive data.
