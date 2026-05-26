import { Link } from "react-router-dom";
import { getSavedUser } from "../../utils/storage";
import "./UserDetails.scss";

function UserDetails() {
  const user = getSavedUser();

  if (!user) {
    return (
      <section className="user-details">
        <Link to="/users">Back to Users</Link>
        <h1>User not found</h1>
      </section>
    );
  }

  return (
    <section className="user-details">
      <Link to="/users" className="user-details__back">
        Back to Users
      </Link>

      <div className="user-details__header">
        <div>
          <h1>User Details</h1>
          <div className="user-details__actions">
            <button className="danger">Blacklist User</button>
            <button className="success">Activate User</button>
          </div>
        </div>
      </div>

      <div className="user-details__profile">
        <div className="user-details__avatar">{user.fullName.charAt(0)}</div>

        <div>
          <h2>{user.fullName}</h2>
          <p>LSQFf587g90</p>
        </div>

        <div>
          <p>User's Tier</p>
          <strong>{"★".repeat(user.tier)}</strong>
        </div>

        <div>
          <h3>{user.balance}</h3>
          <p>{user.accountNumber}/{user.bank}</p>
        </div>
      </div>

      <div className="user-details__tabs">
        <span>General Details</span>
        <span>Documents</span>
        <span>Bank Details</span>
        <span>Loans</span>
        <span>Savings</span>
        <span>App and System</span>
      </div>

      <div className="user-details__card">
        <InfoSection
          title="Personal Information"
          items={[
            ["Full Name", user.fullName],
            ["Phone Number", user.phone],
            ["Email Address", user.email],
            ["BVN", user.bvn],
            ["Gender", user.gender],
            ["Marital Status", user.maritalStatus],
            ["Children", user.children],
            ["Type of Residence", user.residence],
          ]}
        />

        <InfoSection
          title="Education and Employment"
          items={[
            ["Level of Education", user.educationLevel],
            ["Employment Status", user.employmentStatus],
            ["Sector of Employment", user.sector],
            ["Duration of Employment", user.duration],
            ["Office Email", user.officeEmail],
            ["Monthly Income", user.monthlyIncome],
            ["Loan Repayment", user.loanRepayment],
          ]}
        />

        <InfoSection
          title="Socials"
          items={[
            ["Twitter", user.socials.twitter],
            ["Facebook", user.socials.facebook],
            ["Instagram", user.socials.instagram],
          ]}
        />

        <InfoSection
          title="Guarantor"
          items={[
            ["Full Name", user.guarantor.fullName],
            ["Phone Number", user.guarantor.phone],
            ["Email Address", user.guarantor.email],
            ["Relationship", user.guarantor.relationship],
          ]}
        />
      </div>
    </section>
  );
}

function InfoSection({ title, items }: { title: string; items: string[][] }) {
  return (
    <div className="user-details__section">
      <h3>{title}</h3>

      <div className="user-details__grid">
        {items.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;