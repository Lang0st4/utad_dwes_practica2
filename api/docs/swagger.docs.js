// Import
const swagger = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "API DWES",
      version: "0.1.0",
      description: "CRUD API for weather data and users",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html"
      },
      contact: {
        name: "Gonzalo Márquez",
        email: "gmarquezales@gmail.com"
      }
    },

    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Local server"
      }
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      },

      schemas: {
        /* ===================== USERS ===================== */
        User: {
          type: "object",
          properties: {
            username: { type: "string", example: "user0" },
            fullName: { type: "string", example: "José Sánchez" },
            description: { type: "string", example: "User of this app" },
            email: { type: "string", example: "josesan@gmail.com" },
            role: { type: "string", example: "admin" }
          }
        },

        UserRegister: {
          type: "object",
          required: ["username", "fullName", "email", "password"],
          properties: {
            username: { type: "string" },
            fullName: { type: "string" },
            email: { type: "string" },
            password: { type: "string" }
          }
        },

        AuthResponse: {
          type: "object",
          properties: {
            token: { type: "string", example: "JWT_TOKEN" },
            user: { $ref: "#/components/schemas/User" }
          }
        },

        /* ===================== ADVANCED ===================== */
        Advanced: {
          type: "object",
          required: ["id", "probeID", "airPressure", "date", "time"],
          properties: {
            id: { type: "number" },
            probeID: { type: "string" },
            airPressure: { type: "number" },
            ultravioletIndex: { type: "number" },
            pollenIndex: { type: "number" },
            date: { type: "number" },
            time: { type: "number" }
          }
        },

        /* ===================== AIR QUALITY ===================== */
        AirQuality: {
          type: "object",
          required: ["id", "probeID", "airQualityIndex", "date", "time"],
          properties: {
            id: { type: "number" },
            probeID: { type: "string" },
            airQualityIndex: { type: "number" },
            ozone: { type: "number" },
            smallParticleConcentration: { type: "number" },
            largeParticleConcentration: { type: "number" },
            CO2: { type: "number" },
            CO: { type: "number" },
            SO2: { type: "number" },
            date: { type: "string", format: "date-time" },
            time: { type: "string" }
          }
        },

        /* ===================== HUMIDITY ===================== */
        Humidity: {
          type: "object",
          required: ["id", "probeID", "humidity", "date", "time"],
          properties: {
            id: { type: "number" },
            probeID: { type: "string" },
            humidity: { type: "number" },
            dewPoint: { type: "number" },
            date: { type: "string", format: "date-time" },
            time: { type: "string" }
          }
        },

        /* ===================== INFO ===================== */
        Info: {
          type: "object",
          required: ["id", "probeID", "temperature", "date", "time"],
          properties: {
            id: { type: "number" },
            probeID: { type: "string" },
            temperature: { type: "number" },
            apparentTemperature: { type: "number" },
            cloudCover: { type: "string" },
            date: { type: "string", format: "date-time" },
            time: { type: "string" }
          }
        },

        /* ===================== PICTURES ===================== */
        Pictures: {
          type: "object",
          required: ["id", "url", "date", "time"],
          properties: {
            id: { type: "number" },
            url: { type: "string", example: "https://example.com/image.jpg" },
            location: { type: "string" },
            date: { type: "string", format: "date-time" },
            time: { type: "string" }
          }
        },

        /* ===================== PRECIPITATION ===================== */
        Precipitation: {
          type: "object",
          required: ["id", "probeID", "type", "probability"],
          properties: {
            id: { type: "number" },
            probeID: { type: "string" },
            type: { type: "string", example: "rain" },
            probability: { type: "number" },
            accumulatedPrecipitation: { type: "number" },
            date: { type: "string", format: "date-time" },
            time: { type: "string" }
          }
        },

        /* ===================== PROBES ===================== */
        Probes: {
          type: "object",
          required: ["name"],
          properties: {
            name: { type: "string" },
            description: { type: "string" },
            location: { type: "string" }
          }
        },

        /* ===================== WIND ===================== */
        Wind: {
          type: "object",
          required: ["id", "probeID", "windVelocity", "direction", "date", "time"],
          properties: {
            id: { type: "number" },
            probeID: { type: "string" },
            windVelocity: { type: "number" },
            windGustsVelocity: { type: "number" },
            direction: {
              type: "string",
              enum: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
            },
            date: { type: "string", format: "date-time" },
            time: { type: "string" }
          }
        }
      }
    }
  },

  apis: ["./api/routes/*.js"]
};

// Export
module.exports = swagger(options);
