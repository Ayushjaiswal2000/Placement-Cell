import Interview from '../models/interview.js';

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
