import React, { useRef, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import type { SelectRef } from '@mobile-reality/react-native-select-pro';
import { Select } from '@mobile-reality/react-native-select-pro';
import type { State } from 'packages/react-native-select-pro/src/state/types';

import { SafeAreaViewWrapper } from '../components/safe-area-view-wrapper';
import { DATA } from '../constants/data';

export const Ref = () => {
  const [currentState, setCurrentState] = useState<State>();
  const ref = useRef<SelectRef>(null);

  const onPress = () => {
    if (ref.current) {
      ref.current.open();
    }
  };

  const onClear = () => {
    if (ref.current) {
      console.log("HERE 0")
      ref.current.clear();
    }
  };

  const onGetState = () => {
    if (ref.current) {
      setCurrentState(ref.current.getState());
    }
  };

  const onFullClear = () => {
    if (ref.current) {
      console.log("HERE 000")
      ref.current.fullClear()
    }
  };

  return (
    <SafeAreaViewWrapper>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button title="Open" onPress={onPress} />
        <Button title="Reset" onPress={onClear} />
        <Button title="Full Clear" onPress={onFullClear} />
        <Button title="Get current Select state" onPress={onGetState} />
        <Select ref={ref} options={DATA} searchable={true} clearable={true} />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <Text style={{ marginTop: 20 }}>
          State: {JSON.stringify(currentState, null, 4)}
        </Text>
      </ScrollView>
    </SafeAreaViewWrapper>
  );
};
