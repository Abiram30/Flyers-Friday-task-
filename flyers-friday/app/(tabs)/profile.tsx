import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const ProfileOption = ({ icon, title, subtitle, isLast = false }: any) => (
  <TouchableOpacity style={[styles.optionContainer, isLast && { borderBottomWidth: 0 }]}>
    <View style={styles.optionIconContainer}>
      <Ionicons name={icon} size={22} color="#F59E0B" />
    </View>
    <View style={styles.optionTextContainer}>
      <Text style={styles.optionTitle}>{title}</Text>
      {subtitle && <Text style={styles.optionSubtitle}>{subtitle}</Text>}
    </View>
    <Ionicons name="chevron-forward" size={20} color="#475569" />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Account</Text>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editBtnText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" }}
              style={styles.avatar}
            />
            <View style={styles.onlineBadge} />
          </View>
          <Text style={styles.userName}>UserName</Text>
          <Text style={styles.userEmail}>@example.com</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
          <View style={[styles.statBox, styles.statDivider]}>
            <Text style={styles.statNumber}>45</Text>
            <Text style={styles.statLabel}>Viewed</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        {/* Settings Groups */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Preferences</Text>
          <View style={styles.optionsList}>
            <ProfileOption 
              icon="notifications-outline" 
              title="Notifications" 
              subtitle="Alerts for new grocery deals"
            />
            <ProfileOption 
              icon="location-outline" 
              title="Location" 
              subtitle="Puducherry"
            />
            <ProfileOption 
              icon="heart-outline" 
              title="Favorite Stores" 
              isLast={true}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Support</Text>
          <View style={styles.optionsList}>
            <ProfileOption icon="help-circle-outline" title="Help Center" />
            <ProfileOption icon="shield-checkmark-outline" title="Privacy Policy" />
            <ProfileOption icon="log-out-outline" title="Sign Out" isLast={true} />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0F172A" },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 20,
    marginTop: 10 
  },
  headerTitle: { fontSize: 24, fontWeight: "900", color: "#F8FAFC" },
  editBtn: { backgroundColor: '#1E293B', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10 },
  editBtnText: { color: '#F59E0B', fontWeight: '700' },
  
  profileCard: { alignItems: 'center', paddingVertical: 20 },
  avatarContainer: { position: 'relative' },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: '#1E293B' },
  onlineBadge: { 
    position: 'absolute', 
    bottom: 5, 
    right: 5, 
    width: 20, 
    height: 20, 
    borderRadius: 10, 
    backgroundColor: '#10B981', 
    borderWidth: 3, 
    borderColor: '#0F172A' 
  },
  userName: { color: '#F8FAFC', fontSize: 22, fontWeight: '800', marginTop: 15 },
  userEmail: { color: '#64748B', fontSize: 14, marginTop: 4 },

  statsContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#1E293B', 
    marginHorizontal: 20, 
    borderRadius: 20, 
    paddingVertical: 20,
    marginTop: 10 
  },
  statBox: { flex: 1, alignItems: 'center' },
  statDivider: { borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#334155' },
  statNumber: { color: '#F8FAFC', fontSize: 20, fontWeight: '800' },
  statLabel: { color: '#94A3B8', fontSize: 12, marginTop: 4 },

  section: { marginTop: 30, paddingHorizontal: 20 },
  sectionHeader: { color: '#64748B', fontSize: 13, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 },
  optionsList: { backgroundColor: '#1E293B', borderRadius: 20, overflow: 'hidden' },
  
  optionContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    borderBottomWidth: 1, 
    borderColor: '#334155' 
  },
  optionIconContainer: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#0F172A', justifyContent: 'center', alignItems: 'center' },
  optionTextContainer: { flex: 1, marginLeft: 15 },
  optionTitle: { color: '#F8FAFC', fontSize: 16, fontWeight: '600' },
  optionSubtitle: { color: '#64748B', fontSize: 12, marginTop: 2 },
});