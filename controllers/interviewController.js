import Interview from '../models/interview.js';
import Student from '../models/student.js';

// Controller function to add a new interview
export const postAddInterview = async (req, res) => {
    try {
        const { company, date} = req.body;
        console.log('Request Body:', req.body);

        const userId = req.user._id; 

        // Create a new interview document
        const newInterview = new Interview({
            company,
            date,
            userId
        });

        // Save the new interview to the database
        await newInterview.save();

        res.redirect('/dashboard?success=interviewAdded');
    } catch (error) {
        console.error('Error adding interview:', error);
        res.status(500).json({ message: 'Failed to add interview', error });
    }
};

// Controller function to delete an interview by ID
export const deleteInterview = async (req, res) => {
    try {
        const { id} = req.params;

        // Find the interview by ID and delete it
        const deletedInterview = await Interview.findByIdAndDelete(id);

        if (!deletedInterview) {
            return res.status(404).json({ message: 'Interview not found' });
        }

        res.status(200).json({ message: 'Interview deleted successfully'});
    } catch (error) {
        console.error('Error deleting interview:', error);
        res.status(500).json({ message: 'Failed to delete interview', error });
    }
};



//add student to interviews 

export const addStudentsToInterview = async (req, res) => {
    const { interviewId, studentIds } = req.body;

    try {
        const interview = await Interview.findByIdAndUpdate(
            interviewId,
            { $addToSet: { students: { $each: studentIds } } },
            { new: true }
        );

        if (!interview) {
            return res.status(404).send('Interview not found');
        }
       
       
        res.status(200).json({ redirectUrl: `/interview?id=${interviewId}&success=studentAddedToInterview` });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};



export const getInterviewDetails = async (req, res) => {
    try {
        const { id } = req.query; // Get the interview ID from query parameters
        const userId = req.user._id;
        const userName = req.user ? req.user.name : null;

        // Fetch the interview by ID and populate the students field
        const interview = await Interview.findById(id).populate('students');
        console.log('Interview:', interview); // Log interview to debug

        // Fetch all students for the user who are not already assigned to this interview
        const availableStudents = await Student.find({ userId, _id: { $nin: interview.students } });

        // Render the interviewPage template with interview, userName, and availableStudents data
        res.render('interviewPage', { interview, userName, availableStudents });
    } catch (error) {
        console.error('Error fetching interview details:', error);
        res.status(500).send('Server Error');
    }
};
