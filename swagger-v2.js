import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  // Your API definition
  openapi: '3.0.0',
  info: {
    title: 'Student Information System API', // Title of your API
    version: '2.0.0', // Version of the API
    description: 'API documentation for the Student Information System backend.',
  },
  
  tags: [ 
        {
            name: 'Students',
            description: 'API for managing student records',
        },
        {
            name: 'Courses',
            description: 'API for managing course catalog',
        },
        {
            name: 'Enrollment',
            description: 'API for student enrollment and grades',
        },
    ],
  
  components: { 
    
    schemas: {
  studentInformation: {
    type: 'object',
    required: ['studentId', 'firstName', 'lastName', 'email'],
    properties: {
      studentId: { type: 'string', description: 'Student ID' },
      firstName: { type: 'string', description: 'Student first name' },
      lastName: { type: 'string', description: 'Student last name' },
      email: { type: 'string', format: 'email' },

      // Array of enrolled courses
      coursesEnrolled: {
        type: 'string',
        description: 'List of courses the student is enrolled in',
      }
    }
  },

  courseEnrollment: {
    type: 'object',
    required: ['courseCode'],
    properties: {
      courseCode: {
        type: 'string',
        description: 'Linked course code (e.g., CS101)'
      },
      grades: {
        type: 'array',
        description: 'List of grades received for this course',
        items: {
          type: 'number'
        }
      },
      enrollmentDate: {
        type: 'string',
        format: 'date-time',
        description: 'Date the student enrolled in this course'
      }
    }
  },

  Course: {
    type: 'object',
    required: ['courseCode', 'title', 'units'],
    properties: {
      courseCode: { type: 'string', description: 'Course Code/ID' },
      title: { type: 'string', description: 'Course Name' },
      units: { type: 'string', description: 'Number of units' }
    }
  }
}
    
  },

};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: [
    './routes/*.js', 
    './models/*.js', 
    './index.js' 
  ], 
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;










