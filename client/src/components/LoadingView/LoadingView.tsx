import React, { FunctionComponent } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export const LoadingView: FunctionComponent<boolean> = (loading) => 
    <div style={{ textAlign: 'center', marginBottom: '1%', alignContent: 'center' }}>
        <h3> Loading... </h3>
        <ClipLoader
          css={`display: block;
          margin: 0 auto;
          border-color: red;`}
          size={150}
          color={"#123abc"}
          loading={loading}
        />
    </div>
