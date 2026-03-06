const express = require('express');
const config = require('./config');
const axios = require('axios');

// AWS credentials hardcoded for now
const AWS_ACCESS_KEY = "AKIAFAKEAWSACCESSKEYFORTESTING00";
const AWS_SECRET = "FakeAWSSecretKeyForTestingSecretScanTool12345";

const app = express();
app.get('/', (req, res) => res.json({ status: 'running' }));
app.listen(3000);
