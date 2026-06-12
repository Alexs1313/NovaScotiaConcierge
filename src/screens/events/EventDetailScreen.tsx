import React, {useCallback, useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {localData} from '../../storage/localData';
import {ScreenHeader} from '../../components/shared/ScreenHeader';
import {getEventById} from '../../content/events';
import {colors} from '../../constants/theme';

type EventDetailScreenProps = {
  eventId: string;
  onBack: () => void;
};

export function EventDetailScreen({eventId, onBack}: EventDetailScreenProps) {
  const event = getEventById(eventId);
  const [isSaved, setIsSaved] = useState(false);

  const getSavedEvents = useCallback(async () => {
    const isSavedEvnt = await localData.isEventSaved(eventId);
    setIsSaved(isSavedEvnt);
  }, [eventId]);

  useEffect(() => {
    getSavedEvents();
  }, [getSavedEvents]);

  if (!event) {
    return null;
  }

  const details = [
    {label: 'Location', value: event.location},
    {label: 'Date', value: event.date},
    {label: 'Time', value: event.time},
    {label: 'Type', value: event.type},
    {label: 'Guest Info', value: event.guestInfo},
    {label: 'Dress Mood', value: event.dressMood},
  ];

  const toggleSaveEvrnt = async () => {
    const isSavedEvent = await localData.toggleSavedEvent(event.id);
    setIsSaved(isSavedEvent);
  };

  return (
    <View style={styles.EventDetailVestibule}>
      <ScrollView contentContainerStyle={styles.EventDetailScrollTapestry}>
        <ScreenHeader title="Event Details" onBack={onBack} />
        <View style={styles.EventDetailBodyEnclave}>
          <LinearGradient
            colors={[colors.panelInner, colors.panel]}
            style={styles.EventDetailHeroReliquary}>
            <View style={styles.EventDetailHeroInner}>
              <Text style={styles.EventDetailBadgeEmblem}>
                {event.tag.toUpperCase()}
              </Text>
              <Text style={styles.EventDetailCorniceFiligree}>{event.title}</Text>
              <Text style={styles.EventDetailMetaVellum}>
                {event.time} · {event.date}
              </Text>
            </View>
          </LinearGradient>

          <View style={styles.EventDetailTableLattice}>
            {details.map((row, index) => (
              <View
                key={row.label}
                style={[
                  styles.EventDetailRowPlinth,
                  index < details.length - 1 &&
                    styles.EventDetailDividerFret,
                ]}>
                <Text style={styles.EventDetailLabelEmblem}>{row.label}</Text>
                <Text style={styles.EventDetailValueVellum}>{row.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.EventDetailAboutReliquary}>
            <Text style={styles.EventDetailSectionFiligree}>
              About This Event
            </Text>
            <Text style={styles.EventDetailAboutVellum}>{event.about}</Text>
          </View>

          <View style={styles.EventDetailTipBar}>
            <View style={styles.EventDetailTipSigil}>
              <Text style={styles.EventDetailTipSigilGlyph}>i</Text>
            </View>
            <Text style={styles.EventDetailTipVellum}>{event.usefulNote}</Text>
          </View>

          <Pressable style={styles.EventDetailGildedLatch} onPress={toggleSaveEvrnt}>
            <Text style={styles.EventDetailGildedLatchCaption}>
              {isSaved ? 'Event Saved' : 'Save Event'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  EventDetailVestibule: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  EventDetailScrollTapestry: {
    paddingBottom: 40,
  },
  EventDetailBodyEnclave: {
    padding: 20,
    gap: 14,
  },
  EventDetailHeroReliquary: {
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.border,
  },
  EventDetailHeroInner: {
    padding: 20,
    gap: 5,
  },
  EventDetailBadgeEmblem: {
    color: colors.gold,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  EventDetailCorniceFiligree: {
    color: colors.cream,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Georgia',
    lineHeight: 26,
  },
  EventDetailMetaVellum: {
    color: colors.gold,
    fontSize: 13,
    fontWeight: '600',
  },
  EventDetailTableLattice: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    overflow: 'hidden',
  },
  EventDetailRowPlinth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  EventDetailDividerFret: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  EventDetailLabelEmblem: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  EventDetailValueVellum: {
    color: colors.cream,
    fontSize: 12,
    flex: 1.4,
    textAlign: 'right',
  },
  EventDetailAboutReliquary: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 16,
    gap: 8,
  },
  EventDetailSectionFiligree: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  EventDetailAboutVellum: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
  EventDetailTipBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  EventDetailTipSigil: {
    width: 18,
    height: 18,
    borderRadius: 4,
    backgroundColor: colors.panelInner,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  EventDetailTipSigilGlyph: {
    color: colors.gold,
    fontSize: 11,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  EventDetailTipVellum: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
  },
  EventDetailGildedLatch: {
    backgroundColor: colors.gold,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  EventDetailGildedLatchCaption: {
    color: colors.actionText,
    fontSize: 15,
    fontWeight: '700',
  },
});
