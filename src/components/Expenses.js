
import './Expenses.css'; // Import the CSS file

const Expenses = (props) => {
  return (
    <div className="expenses"> {/* Use className for CSS classes */}
      
      {props.children}
    </div>
  );
};

export default Expenses;
