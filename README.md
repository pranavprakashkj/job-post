# job-post

### Main Task
1. create a new job posting by providing a title, description, and their email address. The user should also be able to specify the required skills and experience level for the job
2. view a list of all current job postings, filtered by required skills and experience level.
3. view the details of a specific job posting, including the title, description, required skills, experience level, and email address of the person who created the posting
4. apply for a job posting by providing their name, email, resume, and a cover letter. The cover letter should be in Markdown format.
5. user who created a job posting can view a list of all the applications for that job, including the name, email, and cover letter of the applicant.


### Bonus tasks implemented
1. Implement authentication 
2. Add pagination to the list of job postings and applications
3. Implement a search feature for the job postings.


##### How to run the application?

```bash
npm install
```

```bash
npm start
```

## Walkthrough

1. Launch the application after installing the dependenies.

2. After launching the server based on expressjs framework will be availlable at `http://localhost:3000`

3. The webserver expose routes are given below

  * `http://localhost:3000/postjob`  Post a job
  * `http://localhost:3000/deletejob/?id=<jobid>`  Deletes a job
  * `http://localhost:3000/updatejob/?id=<jobid>`  Update a job post 
  * `http://localhost:3000/getalljobs/?skills=<skill>&experience=<year>&page=1&limit=5`  get the name all the jobs filtered by skills and experience
  * `http://localhost:3000/getjob/?title=<job title>`  get the job detail by specifying the title
  * `http://localhost:3000/applyjob/:id`  apply to a specific job using JobId
  * `http://localhost:3000/getapplicants/:id/?page=1&limit=1`  get all applicants for a specific job using JobId
  * `http://localhost:3000/getajobs/search/?q=<query>&page=1&limit=5`  search for a specific job
  * `http://localhost:3000/signup`  register a new user using name,email and password
  * `http://localhost:3000/login`  login using username and password
  
  
  enjoy!
  
