/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';

import transito from '../../assets/transito.png';
import policia from '../../assets/policia.png';
import acidente from '../../assets/acidente.png';
import perigo from '../../assets/perigo.png';
import preco from '../../assets/preco.png';
import chat from '../../assets/chat.png';
import local from '../../assets/local.png';
import sos from '../../assets/sos.png';
import interdicao from '../../assets/interdicao.png';
import erro from '../../assets/erro.png';

import {
  CircleButton,
  ButonImage,
  ButonText,
  WarningBackg,
  WarningColumn,
} from './styles';

const Warnings = () => {
  return (
    <>
      <WarningBackg>

        <WarningColumn>
          <View>
            <CircleButton>
              <ButonImage source={transito} />
            </CircleButton>
            <ButonText>Trânsito</ButonText>
          </View>
          <View>
            <CircleButton>
              <ButonImage source={acidente} />
            </CircleButton>
            <ButonText>Acidente</ButonText>
          </View>
          <View>
            <CircleButton>
              <ButonImage source={perigo} />
            </CircleButton>
            <ButonText>Perigo</ButonText>
          </View>
        </WarningColumn>


        <WarningColumn>
          <View>
            <CircleButton>
              <ButonImage source={policia} />
            </CircleButton>
            <ButonText>Polícia</ButonText>
          </View>
          <View>
            <CircleButton>
              <ButonImage source={sos} />
            </CircleButton>
            <ButonText>  SOS</ButonText>
          </View>
          <View>
            <CircleButton>
              <ButonImage source={interdicao} />
            </CircleButton>
            <ButonText>Interdição</ButonText>
          </View>
        </WarningColumn>

      </WarningBackg>
    </>
  );
};

export default Warnings;
