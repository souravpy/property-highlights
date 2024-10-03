import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const PropertyHighlights = () => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    fetchHighlights();
  }, []);

  const fetchHighlights = async () => {
    try {
      const response = await axios.get('/api/highlights');
      setHighlights(response.data);
    } catch (error) {
      console.error('Error fetching highlights:', error);
    }
  };

  const addHighlight = async () => {
    try {
      const response = await axios.post('/api/highlights', { text: 'New highlight' });
      setHighlights([...highlights, response.data]);
    } catch (error) {
      console.error('Error adding highlight:', error);
    }
  };

  const editHighlight = async (id, newText) => {
    try {
      await axios.put(`/api/highlights/${id}`, { text: newText });
      setHighlights(highlights.map(h => h.id === id ? { ...h, text: newText } : h));
    } catch (error) {
      console.error('Error editing highlight:', error);
    }
  };

  const deleteHighlight = async (id) => {
    try {
      await axios.delete(`/api/highlights/${id}`);
      setHighlights(highlights.filter(h => h.id !== id));
    } catch (error) {
      console.error('Error deleting highlight:', error);
    }
  };

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    const items = Array.from(highlights);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setHighlights(items);

    try {
      await axios.put('/api/highlights/reorder', { highlights: items });
    } catch (error) {
      console.error('Error reordering highlights:', error);
    }
  };

  return (
    <div className="property-highlights">
      <h2 className="text-xl font-bold mb-4">Property highlights</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="highlights">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
              {highlights.map((highlight, index) => (
                <Draggable key={highlight.id} draggableId={highlight.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex items-center space-x-2 bg-white p-2 rounded shadow"
                    >
                      <span className="flex-grow">{highlight.text}</span>
                      <button onClick={() => editHighlight(highlight.id, prompt('Edit highlight:', highlight.text))}>Edit</button>
                      <button onClick={() => deleteHighlight(highlight.id)}>Delete</button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button onClick={addHighlight} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add Highlight</button>
    </div>
  );
};

export default PropertyHighlights;