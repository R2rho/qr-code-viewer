import zlib
import base64
import qrcode
import json
# Your JSON data
data = {
  "name": "john doe",
  "id" : "12345",
  "version" : "2",
  "field1" : {"subfield1":"value1","subfield2":"valueasdfasdfasdfasdfasdfasdfasdfasdf3valueasdfasdfasdfasdfasdf","subfield3":"valueasdfasdfasdfasdfasdfasdfasdfasdf3valueasdfasdfasdfasdfasdf"},
  "field2" : {"subfield1":"value1","subfield2":"valueasdfasdfasdfasdfasdfasdfasdfasdf3valueasdfasdfasdfasdfasdf","subfield3":"valueasdfasdfasdfasdfasdfasdfasdfasdf3valueasdfasdfasdfasdfasdf"},
  "field3" : {"subfield1":"value1","subfield2":"valueasdfasdfasdfasdfasdfasdfasdfasdf3valueasdfasdfasdfasdfasdf","subfield3":"valueasdfasdfasdfasdfasdfasdfasdfasdf3valueasdfasdfasdfasdfasdf"},
  "field4" : {"subfield1":"value1","subfield2":"valueasdfasdfasdfasdfasdfasdfasdfasdf3valueasdfasdfasdfasdfasdf","subfield3":"valueasdfasdfasdfasdfasdfasdfasdfasdf3valueasdfasdfasdfasdfasdf"}
}

data = json.dumps(data).encode('utf-8')

# Compress the data
compressed_data = zlib.compress(data)
print(f"RAW JSON Data: {len(data)}")
print(f"Compressed: {len(compressed_data)}")


# Encode the compressed data in base64 to make it QR-code friendly
encoded_data = base64.b64encode(compressed_data)

# Save the encoded data to a file
with open('encoded_data.txt', 'wb') as file:
    file.write(encoded_data)

# Generate the QR code (optional)
# img = qrcode.make(encoded_data)
# img.show()
