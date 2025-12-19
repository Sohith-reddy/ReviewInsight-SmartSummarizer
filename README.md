# ReviewInsight - Online Review Summarizer & Sentiment Analysis Chatbot

An intelligent chatbot that scrapes and analyzes product reviews from multiple e-commerce platforms, providing comprehensive summaries and sentiment analysis. Similar to Amazon's Rufus, but designed to work across various online marketplaces.

## Live Demo

Experience the application live: [View from here](https://smartreviewanalyzer.netlify.app/)

## Features

- **Multi-Platform Scraping**: Extracts reviews from multiple e-commerce platforms
- **AI-Powered Summarization**: Generates concise summaries of product reviews
- **Sentiment Analysis**: Analyzes customer sentiment (positive, negative, neutral)
- **Interactive Chat Interface**: Conversational UI for easy interaction
- **Real-time Analysis**: Get instant insights on products
- **Trend Detection**: Identifies common themes and issues in reviews

## Tech Stack

### Frontend
- **React** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality

### Backend
- **Express JS** - Node JS based framework

## Prerequisites

Before running this project, ensure you have:

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd reviewbot_front
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## How It Works

1. **User Input**: User provides a product URL or name
2. **Scraping**: Backend scrapes reviews from supported e-commerce platforms
3. **Processing**: Reviews are processed and analyzed for sentiment
4. **Summarization**: AI generates a comprehensive summary
5. **Display**: Results are presented in an interactive chat format

## Currently Supported Platforms

- Amazon
- Flipkart

## API Integration

The frontend communicates with an Express backend API. Ensure the backend server is running on the configured port.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with React and Vite for optimal performance
- Powered by Express JS for robust backend processing

## Contact

For questions or support, please open an issue in the repository.
