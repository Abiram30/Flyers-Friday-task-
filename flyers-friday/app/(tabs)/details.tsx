import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function FlyerDetails() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#020617" }}>
      <Image
        source={{ uri: "https://via.placeholder.com/400" }}
        style={{ height: 260, width: "100%" }}
      />

      <View style={{ padding: 16 }}>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
          Fresh Mart
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#facc15",
            padding: 10,
            borderRadius: 8,
            marginVertical: 10,
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            Follow
          </Text>
        </TouchableOpacity>

        <Text style={{ color: "#94a3b8" }}>👁 1.2k views</Text>

        <Text style={{ color: "#cbd5f5", marginTop: 10 }}>
          Weekend Mega Sale – Fresh groceries at great prices.
        </Text>

        <Text style={{ color: "#cbd5f5", marginTop: 8 }}>
          Valid till Jan 25, 2026
        </Text>

        <Text style={{ color: "#cbd5f5", marginTop: 8 }}>
          📍 Puducherry
        </Text>

        {/* Action Buttons */}
        <View style={{ marginTop: 20 }}>
          {["Share", "Save", "Get Directions"].map((btn) => (
            <TouchableOpacity
              key={btn}
              style={{
                backgroundColor: "#1e293b",
                padding: 12,
                borderRadius: 8,
                marginBottom: 10,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                {btn}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
