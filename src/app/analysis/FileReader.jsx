
import Button from '@/components/Button';
import React from 'react'
import { lightenDarkenColor, useCSVReader } from 'react-papaparse';

const GREY = '#CCC';
const GREY_LIGHT = 'rgba(255, 255, 255, 0.4)';
const DEFAULT_REMOVE_HOVER_COLOR = '#A01919';
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
  DEFAULT_REMOVE_HOVER_COLOR,
  40
);
const GREY_DIM = '#686868';


export default function FileReader({onFileUpload}) {

    const { CSVReader } = useCSVReader()

  return (
    <CSVReader
      onUploadAccepted={onFileUpload}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }) => (
        <>
          <div style={styles.csvReader}>
            {/* <button type='button' {...getRootProps()} style={styles.browseFile}>
              Browse file
            </button> */}
            <Button {...getRootProps()} className='w-full mt-2' label={'Browse File (*.csv)'} />
            <div style={styles.acceptedFile}>
              {acceptedFile && acceptedFile.name}
            </div>
            <button {...getRemoveFileProps()} style={styles.remove}>
              Remove
            </button>
          </div>
          <ProgressBar style={styles.progressBarBackgroundColor} />
        </>
      )}
    </CSVReader>
  )
}

const styles = {
    zone: {
      alignItems: 'center',
      border: `2px dashed ${GREY}`,
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      padding: 20,
    },
    file: {
      background: 'linear-gradient(to bottom, #EEE, #DDD)',
      borderRadius: 20,
      display: 'flex',
      height: 120,
      width: 120,
      position: 'relative',
      zIndex: 10,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    info: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 10,
      paddingRight: 10,
    },
    size: {
      backgroundColor: GREY_LIGHT,
      borderRadius: 3,
      marginBottom: '0.5em',
      justifyContent: 'center',
      display: 'flex',
    },
    name: {
      backgroundColor: GREY_LIGHT,
      borderRadius: 3,
      fontSize: 12,
      marginBottom: '0.5em',
    },
    progressBar: {
      bottom: 14,
      position: 'absolute',
      width: '100%',
      paddingLeft: 10,
      paddingRight: 10,
    },
    zoneHover: {
      borderColor: GREY_DIM,
    },
    default: {
      borderColor: GREY,
    },
    remove: {
      height: 23,
      position: 'absolute',
      right: 6,
      top: 6,
      width: 23,
    },
  };