// Import the Student model
import Student from '../models/student.js'; // Adjust the path as needed

// Handle adding a new student
export const postAddStudent = async (req, res) => {
  const { name, email, batch, college, dsa, webdev, react } = req.body;
  try {
    // Ensure the user is authenticated
    if (!req.user) {
      return res.redirect('/login');
    }

    const userId = req.user._id; 

    // Create a new student instance
    const newStudent = new Student({
      name,
      email,
      batch,
      college,
      dsa,
      webdev,
      react,
      userId, // Reference to the authenticated user
    });

    // Save to the database
    await newStudent.save();

    // Redirect to dashboard with success query parameter
    res.redirect('/dashboard?success=student');
  } catch (error) {
    console.error('Add Student Error:', error);
    res.status(500).send('An error occurred while adding the student.');
  }
};

export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
      // Ensure the user is authenticated
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      // Find and remove the student
      const result = await Student.findByIdAndDelete(id);
  
      // Check if student was found and removed
      if (!result) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      // Respond with success
      res.status(200).json({ message: 'Student removed successfully' });
    } catch (error) {
      console.error('Remove Student Error:', error);
      res.status(500).json({ error: 'An error occurred while removing the student.' });
    }
  };