export const Table = ({ children, title }) => {
  return (
    <table>
      {title === "notes" && (
        <thead>
          <tr>
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th>Buttons</th>
          </tr>
        </thead>
      )}
      {title === "summary" && (
        <thead>
          <tr>
            <th>Note Category</th>
            <th>Active</th>
            <th>
              <a href="">Archived</a>
            </th>
          </tr>
        </thead>
      )}
      {
        title === "archive" && (
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Content</th>
              <th></th>
            </tr>
          </thead>
        )
      }
      {children}
    </table>
  );
};
