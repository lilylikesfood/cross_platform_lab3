import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useContacts } from '../../utils/ContactContext';
import { Colors, Spacing, Fonts, GlobalStyles } from '../../styles/globalStyles';

const ContactDetailsScreen = () => {
  const route = useRoute();
  const { contactId } = route.params || {};
  const { contacts } = useContacts();

  const contact = contacts.find(c => c.id === contactId);

  if (!contact) {
    return (
      <View style={[GlobalStyles.centered, styles.container]}>
        <Text style={styles.missingText}>Contact not found.</Text>
      </View>
    );
  }

  return (
    <View style={[GlobalStyles.container, styles.container]}>
      <Text style={styles.name}>
        {contact.firstName} {contact.lastName}
      </Text>
      <Text style={styles.label}>Phone:</Text>
      <Text style={styles.value}>{contact.phone}</Text>

      {contact.email && (
        <>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{contact.email}</Text>
        </>
      )}

      {contact.company && (
        <>
          <Text style={styles.label}>Company:</Text>
          <Text style={styles.value}>{contact.company}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: Spacing.lg },
  name: { fontSize: Fonts.large, fontWeight: 'bold', marginBottom: Spacing.md },
  label: { fontSize: Fonts.small, color: Colors.text.secondary, marginTop: Spacing.sm },
  value: { fontSize: Fonts.medium, color: Colors.text.primary },
  missingText: { color: Colors.text.secondary, fontSize: Fonts.medium },
});

export default ContactDetailsScreen;
