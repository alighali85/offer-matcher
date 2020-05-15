import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TabsBar from '../../components/tabsBar/TabsBar';
import OfferInput from '../../components/offerInput';
import ResultModal from '../../components/resultModal';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
  mainContainer: {
    minHeight: '100vh',
  },
  mainPaper: {
    minHeight: '490px',
    maxHeight: '490px',
    marginTop: '48px',
  },
});

export default function OffersForm({ tabs = [] }) {
  OffersForm.testId = 'testId';
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [offers, setOffers] = useState({ employer: 0, employee: 0 });
  const [inputValue, setInputValue] = useState('');
  const [match, setMatch] = useState(null);
  const classes = useStyles();

  const checkMatch = () => {
    if (offers.employer > 0 && offers.employee > 0) {
      setMatch(offers.employee <= offers.employer);
    }
  };

  const handleSubmit = () => {
    const updatedOffers = Object.assign(offers, { [activeTab.name]: Number(inputValue) });
    setOffers(updatedOffers);
    setInputValue('');
    checkMatch();
  };

  const resetState = () => {
    setActiveTab(tabs[0]);
    setMatch(null);
    setInputValue('');
    setOffers({ employer: 0, employee: 0 });
  };

  return (
    <div className={classes.root} data-testid={OffersForm.testId}>
      <Container className={classes.mainContainer}>
        <Paper className={classes.mainPaper} elevation={3}>
          <TabsBar
            onClick={(e, value) => setActiveTab(tabs[value])}
            source={tabs}
            activeId={activeTab.id}
          />
          <OfferInput
            offerValue={offers[activeTab.name]}
            onInput={(e) => setInputValue(Number(e.target.value))}
            fieldLabel={activeTab.label}
            fieldValue={inputValue}
            onSubmit={handleSubmit}
            title={activeTab.title}
          />
          {match !== null && (
            <ResultModal
              result={match}
              offers={offers}
              resetAction={resetState}
            />
          )}
        </Paper>
      </Container>
    </div>
  );
}
