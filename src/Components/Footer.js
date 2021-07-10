export default function Footer({ onSubmit }) {
  return (
    <>
      <div className="footer">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title of todo"
        />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Describe your todo"
        />
        <button onClick={onSubmit}>Add</button>
      </div>
    </>
  );
}
