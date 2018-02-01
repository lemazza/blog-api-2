'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/BlogPostDb';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-BlogPostDb';
exports.PORT = process.env.PORT || 8080;