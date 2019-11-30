import {
  Chip,
  Container,
  createStyles,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select
} from '@material-ui/core';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadHikes} from '../hike/actions';
import {AppState} from '../state/store';
import {AreaState} from './reducer';
import {loadAreas, selectAreaOptions} from './actions';
import {Area} from '../models/area';

const useStyles = makeStyles(theme =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: '80%'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    chip: {
      margin: 2
    }
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 18;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export const BrowseAreas: React.FC = () => {
  const classes = useStyles();
  const {options, selected, loading} = useSelector<AppState, AreaState>(state => state.area);
  const dispatch = useDispatch();

  // Load areas options when component just mounted
  React.useEffect(() => {
    dispatch(loadAreas());
  }, []);

  return (
    <Container>
      <FormControl className={classes.formControl} disabled={loading}>
        <InputLabel id="multiple-select-areas">Select hiking areas</InputLabel>
        <Select
          labelId="multiple-select-areas"
          id="demo-mutiple-chip"
          multiple
          value={selected}
          onChange={e => {
            const selectedNames = e.target.value as string[];
            const areaOptions: Area[] = options.filter(({name}) => selectedNames.includes(name));
            dispatch(loadHikes(areaOptions));
            dispatch(selectAreaOptions(areaOptions));
          }}
          input={<Input id="multiple-select-areas" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {(selected as Area[]).map(({name}) => (
                <Chip
                  key={name}
                  label={name}
                  className={classes.chip}
                  onDelete={() => {
                    const withoutThisChip: Area[] = (selected as Area[]).filter(
                      area => area.name !== name
                    );
                    dispatch(loadHikes(withoutThisChip));
                    dispatch(selectAreaOptions(withoutThisChip));
                  }}
                  color="secondary"
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {options.map(({name, areaid}) => (
            <MenuItem key={areaid} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};
