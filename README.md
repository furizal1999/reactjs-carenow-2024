This project is a test project at CareNow Indonesia with instructions found in the ROOT folder (SoftwareEngineerAtCareNow.pdf) obtained on February 21, 2024 (deadline: February 26, 2024, 23:59 PM). The project is built with React.js (Front-end), Express.js (Back-end/api endpoint, link: https://github.com/furizal1999/expressjs-carenow-2024), and Firestore database.

<h1>Setup Instructions:</h1>

<h2>Back-end project:</h2>
<ol>
    <li>Clone the project from this link: https://github.com/furizal1999/expressjs-carenow-2024</li>
    <li>Download the authentication key file attached to the email careers@carenow.id (file name: <b>carenow-2024-firebase-adminsdk-o57sq-337cbb8d9a.json</b>).</li>
    <li>Do not change the name of the authentication key file.</li>
    <li>Place the downloaded authentication key file into the ROOT folder of the cloned expressjs project from step 1.</li>
    <li>Run the project in the terminal/cmd using the syntax: <b>npm run api-service</b> (assuming you have installed Node.js).</li>
    <li>After that, the system will automatically run on port <b>3000</b>.</li>
    <li>Once the back-end system is successfully running, proceed to set up the front-end system.</li>
</ol>

<h2>Front-end project:</h2>
<ol>
    <li>Clone the project from this link: https://github.com/furizal1999/reactjs-carenow-2024</li>
    <li>After cloning the project successfully, run the project using the syntax: <b>pnpm run dev</b></li>
    <li>If you haven't installed pnpm yet, please install it first using the syntax: <b>npm install pnpm</b></li>
    <li>After successfully installing pnpm, repeat step number 2.</li>
    <li>After the project is successfully run, the project will run by default on port <b>5173</b>, and the system can be accessed using the URL: http://localhost:5173/ (local host)</li>
    <li>Before testing, make sure the back-end project has been set up and running on port <b>3000</b></li>
    <li>Please test the system by filling out the form provided on the front-end system.</li>
</ol>

<h1>Testing Instructions:</h1>
<ol>
    <li>Visit http://localhost:5173/ or adjust according to the port used.</li>
    <li>Fill in the form with:
        <ul>
            <li>patientName: String,</li>
            <li>patientId: String,</li>
            <li>dateOfTreatment: Date,</li>
            <li>treatmentDescription: [Array of String] -> MultiSelect,</li>
            <li>medicationsPrescribed: [Array of String] -> MultiSelect,</li>
            <li>costOfTreatment: Number,</li>
        </ul>
    </li>
    <li>Click the submit button, an alert will appear indicating that the data has been successfully input (if successful). If not successful, there may still be an error during setup (contact via WhatsApp: 082386092684).</li>
    <li>After successfully submitting the data, the form will be cleared to input new data. Repeat step 2 to re-enter.</li>
</ol>

More questions:
Email: furizal.id@gmail.com,
Phone: 082386092684
