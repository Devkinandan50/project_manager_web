const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Project = require('../models/Project');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Projects using: GET "/api/projects/fetchallprojects". Login required
router.get('/fetchallprojects', fetchuser, async (req, res) => {
    try {
        const pro = await Project.find({ user: req.user.id });
        res.json(pro)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Project using: POST "/api/projects/addproject". Login required
router.post('/addproject', fetchuser, [
    body('Projectname', 'Enter a valid Projectname').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('progess', 'Enter a valid Progess').isNumeric({ min: 0, max: 100 })], async (req, res) => {
        try {
            const { Projectname, description, tag, progess, githublink, pro_enddate, project_members, project_tasks } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const pro = new Project({
                Projectname, description, tag, progess, githublink, pro_enddate, user: req.user.id, project_members, project_tasks
            })
            const savedpro = await pro.save()

            res.json(savedpro)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Update an existing Project using: PUT "/api/projects/updateProject". Login required
router.put('/updateproject/:id', fetchuser, async (req, res) => {
    const { Projectname, description, tag, progess, githublink, pro_enddate, project_members, project_tasks } = req.body;
    try {
        // Create a newProject object
        const newProject = {};
        if (Projectname) { newProject.Projectname = Projectname };
        if (description) { newProject.description = description };
        if (tag) { newProject.tag = tag };
        if (progess) {
            newProject.progess = progess
            // newProject.lastpro_updatedate = Date.now();
        };
        if (githublink) { newProject.githublink = githublink };
        if (pro_enddate) { newProject.pro_enddate = pro_enddate };
        if (project_members) { newProject.project_members = project_members };
        if (project_tasks) { newProject.project_tasks = project_tasks };

        // Find the Project to be updated and update it
        let pro = await Project.findById(req.params.id);
        if (!pro) { return res.status(404).send("Not Found") }

        if (pro.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        pro = await Project.findByIdAndUpdate(req.params.id, { $set: newProject }, { new: true })
        res.json({ pro });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing Project using: DELETE "/api/projects/deleteProject". Login required
router.delete('/deleteproject/:id', fetchuser, async (req, res) => {
    try {
        // Find the Project to be delete and delete it
        let pro = await Project.findById(req.params.id);
        if (!pro) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Project
        if (pro.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        pro = await Project.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Project has been deleted", project_info: pro });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 5: Get All the Projects for Dashboard using: GET "/api/projects/dashboard". Login required
router.get('/dashboard', fetchuser, async (req, res) => {
    try {
        const pro = await Project.find({ user: req.user.id });
        let TotalProject = pro.length;
        let totalcompleted_task = 0
        let totalremaining_task = 0
        let totalinprogess_task = 0
        let totalunderreview_task = 0
        let totalEmployee = 0
        let barChartData = []
        let barChartDatakeys = []
        let duedatemiss = []
        let wafflechartForall = {};


        for (let index = 0; index < pro.length; index++) {
            pro[index] = pro[index].toJSON();

            let task_completed = 0
            let task_remaining = 0
            let task_inprogess = 0
            let task_underreview = 0
            let allremainingtask = []
            let empAndTask = {};
            let pre = [
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                },
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                },
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                },
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                },
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                },
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                },
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                },
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                },
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                },
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                },
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                },
                {
                    "Remaining": 0,
                    "InProgress": 0,
                    "UnderReview": 0,
                    "Completed": 0
                }
            ]

            tasks = pro[index].project_tasks
            employees = pro[index].project_members

            tasks.map(task => {
                var str = JSON.stringify(task.date);
                var month = str.slice(6, 8);
                var monthinInt = parseInt(month);
                var ind = monthinInt - 1;

                if (!empAndTask[task.task_assignto]) {
                    empAndTask[task.task_assignto] = 1;
                } else {
                    empAndTask[task.task_assignto] = empAndTask[task.task_assignto] + 1;
                }

                if (task.task_status == 'completed') {
                    task_completed++;
                    pre[ind].Completed = pre[ind].Completed + 1
                }
                else if (task.task_status == 'remaining') {
                    task_remaining++;
                    allremainingtask.push(task);
                    pre[ind].Remaining = pre[ind].Remaining + 1
                }
                else if (task.task_status == 'inprogress') {
                    task_inprogess++;
                    pre[ind].InProgress = pre[ind].InProgress + 1
                }
                else if (task.task_status == 'underreview') {
                    task_underreview++;
                    pre[ind].UnderReview = pre[ind].UnderReview + 1
                }
            })

            temp = [];
            for (const key in empAndTask) {
                temp.push({
                    "id": key,
                    "label": key,
                    "value": empAndTask[key]
                })
            }
            // data for particular project
            pro[index].completedTask = task_completed;
            pro[index].inprogressTask = task_inprogess;
            pro[index].underreviewTask = task_underreview;
            pro[index].remainingTask = task_remaining;
            pro[index].Allremainingtask = allremainingtask;
            pro[index].streamchart = pre;
            pro[index].wafflechart = temp;





            // data collect for project for -------> all project
            totalcompleted_task = totalcompleted_task + task_completed;
            totalremaining_task = totalremaining_task + task_remaining;
            totalinprogess_task = totalinprogess_task + task_inprogess;
            totalunderreview_task = totalunderreview_task + task_underreview;
            totalEmployee = totalEmployee + employees.length;

            if (index < 15) {
                barChartData.push({
                    "projectname": pro[index].Projectname,
                    [pro[index].Projectname]: pro[index].progess
                })
                barChartDatakeys.push(pro[index].Projectname)
            }

            dateStatus = "";
            var today = new Date();
            var Christmas = new Date(pro[index].pro_enddate); 
            var diffMs = (Christmas - today); 
            var diffDays = Math.floor(diffMs / 86400000);
            
            if(diffDays < 0){
                dateStatus = "table-danger";
            }
            else if(diffDays >= 0 && diffDays < 5){
                dateStatus = "table-warning";
            }
            else{
                dateStatus = "table-success";
            }

            duedatemiss.push({
                "datemiss": dateStatus,
                "projectname": pro[index].Projectname,
                "tag": pro[index].tag,
                "progress":pro[index].progess,
                "github": pro[index].githublink,
                "duedate": pro[index].pro_enddate,
            })

            if (!wafflechartForall[pro[index].tag]) {
                wafflechartForall[pro[index].tag] = 1;
            } else {
                wafflechartForall[pro[index].tag] = wafflechartForall[pro[index].tag] + 1;
            }



        }


        wafflealldata = [];
            for (const key in wafflechartForall) {
                wafflealldata.push({
                    "id": key,
                    "label": key,
                    "value": wafflechartForall[key]
                })
            }




        pro.unshift({
            Projectname: "All",
            "TotalProject": TotalProject,
            "completedTask": totalcompleted_task,
            "remainingTask": totalremaining_task,
            "inprogressTask": totalinprogess_task,
            "underreviewTask": totalunderreview_task,
            "totalemployee": totalEmployee,
            "barchart": barChartData,
            "barchartkeys": barChartDatakeys,
            "missingdate": duedatemiss,
            "wafflechartAll": wafflealldata
        });


        res.json(pro)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router