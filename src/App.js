import React from 'react';
import Feedback from './Feedback';
const App = () => {
  return (
    <div class="p-5">
      {/* Instead of creating everything in the app.js, we only render this component. */}
      <Feedback />
    </div>
  )
}

export default App;
