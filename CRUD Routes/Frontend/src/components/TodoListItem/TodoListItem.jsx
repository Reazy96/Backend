const TodoListItem = () => {
    return (
        <>
          <section className="todo-list-item">
         
    
            <Link to={`/todos/${singleToDo?.id}`}>
              <div>
                <p>{new Date(singleToDo?.dueDate).toLocaleDateString()}</p>
                <p>{singleToDo?.content}</p>
              </div>
              <p>{singleToDo?.todoist}</p>
            </Link>
            <button onClick={() => setShowEditForm(!showEditForm)}>✎</button>
            <button onClick={deleteTodo}>❌</button>
          </section>
    
          <div style={{ display: showEditForm ? "block" : "none" }}>
            <EditToDoForm
              singleToDo={singleToDo}
              setToDos={setToDos}
              setShowEditForm={setShowEditForm}
            />
          </div>
        </>
      );
    };
    
 
export default TodoListItem;