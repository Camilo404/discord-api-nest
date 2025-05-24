# Discord API NestJS

A NestJS-based REST API that provides endpoints to interact with Discord's API for fetching user profile data, avatars, and profile effects.

## 🚀 Features

- **User Profile Data**: Fetch comprehensive Discord user profile information
- **Avatar Retrieval**: Download user avatars in high resolution (2048px)
- **Profile Effects**: Access user profile effects and decorations
- **CORS Enabled**: Ready for frontend integration
- **TypeScript Support**: Fully typed with custom DTOs
- **Modern Architecture**: Built with NestJS framework

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Acoount Token (for API access)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd discord-api-nest
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your Discord token:
```env
TOKEN=your_discord_bot_token_here
PORT=3000
```

## 🚀 Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

The application will start on `http://localhost:3000` (or the port specified in your environment variables).

## 📚 API Endpoints

### Base URL: `/v1`

#### `GET /v1/`
Returns a welcome message to verify the API is running.

**Response:**
```json
{
  "status": 200,
  "message": "Hello 💀"
}
```

#### `GET /v1/user/:id`
Fetches comprehensive profile data for a Discord user.

**Parameters:**
- `id` (string): Discord user ID

**Response:**
```json
{
  "user": {
    "id": "123456789",
    "username": "username",
    "avatar": "avatar_hash",
    "discriminator": "0001"
  },
  "connected_accounts": [],
  "user_profile": {},
  "badges": []
}
```

#### `GET /v1/avatar/:id`
Downloads the user's avatar image in high resolution.

**Parameters:**
- `id` (string): Discord user ID

**Response:** 
- Content-Type: `image/*`
- Returns the avatar image file (2048x2048 pixels)

#### `GET /v1/profile-effects/:id`
Fetches user profile effects and decorations.

**Parameters:**
- `id` (string): Discord user ID

**Response:**
```json
{
  "profile_effect": {}
}
```

## 🧪 Testing

### Run Unit Tests
```bash
npm run test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Run E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:cov
```

## 🏗️ Project Structure

```
src/
├── app.controller.ts          # Main application controller
├── app.module.ts              # Root application module
├── main.ts                    # Application entry point
└── discord/                   # Discord API module
    ├── discord.controller.ts  # Discord endpoints controller
    ├── discord.service.ts     # Discord API service
    ├── discord.module.ts      # Discord module configuration
    └── dto/                   # Data Transfer Objects
        ├── userProfile.dto.ts # User profile interfaces
        └── profileEffects.dto.ts # Profile effects interfaces
```

## 🔧 Configuration

The application uses the following environment variables:

- `TOKEN`: Account token for API authentication
- `PORT`: Port number for the application (default: 3000)

## 🛡️ Security Notes

- Keep your Account token secure and never commit it to version control
- The application includes CORS support for frontend integration
- Proxy trust is enabled for deployment behind reverse proxies

## 📦 Dependencies

### Main Dependencies
- **@nestjs/common**: NestJS common utilities
- **@nestjs/core**: NestJS core framework
- **@nestjs/axios**: HTTP client module
- **@nestjs/config**: Configuration management
- **axios**: HTTP client for API requests
- **rxjs**: Reactive programming library

### Development Dependencies
- **@nestjs/testing**: Testing utilities
- **jest**: Testing framework
- **prettier**: Code formatting
- **eslint**: Code linting
- **typescript**: TypeScript compiler

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start:prod
```

## 📝 Code Quality

### Format Code
```bash
npm run format
```

### Lint Code
```bash
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the UNLICENSED license.

## ⚠️ Disclaimer

This project is for educational purposes. Make sure to comply with Discord's Terms of Service and API usage guidelines when using this application.
