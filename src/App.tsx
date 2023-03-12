import React from 'react';
import { Navbar } from './scenes/navbar';
import { SelectedPage } from './shared/types';

function App() {
  const [selectedPage, setSelectedPage] = React.useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = React.useState<boolean>(true);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  console.log(isTopOfPage);

  return (
    <div>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
