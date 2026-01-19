import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CreatePost() {
  return (
    <View style={{ padding: 16 }}>
      <Text>Flyer Visual</Text>
      <View
        style={{
          height: 150,
          backgroundColor: "#e5e7eb",
          marginBottom: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Upload Flyer (placeholder)</Text>
      </View>

      <Text>Posting Title</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 12 }} />

      <Text>Description</Text>
      <TextInput
        multiline
        style={{ borderWidth: 1, height: 80, marginBottom: 12 }}
      />

      <Text>Target Region</Text>
      <View
        style={{
          height: 120,
          backgroundColor: "#e5e7eb",
          marginBottom: 12,
        }}
      />

      <Text>Posting Frequency</Text>
      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        {["Daily", "Weekly", "Monthly"].map((f) => (
          <TouchableOpacity
            key={f}
            style={{
              borderWidth: 1,
              padding: 8,
              marginRight: 8,
              borderRadius: 6,
            }}
          >
            <Text>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#facc15",
          padding: 14,
          borderRadius: 8,
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Preview & Post
        </Text>
      </TouchableOpacity>
    </View>
  );
}
