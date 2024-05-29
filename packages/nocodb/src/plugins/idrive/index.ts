const config: XcPluginConfig = {
  builder: S3Plugin,
  title: 'iDrive S3',
  version: '0.0.1',
  logo: 'plugins/iDriveStorage.png',
  description:
    'iDrive S3 is a storage solution that uses iDrive-compatible APIs to store and serve data. It is API compatible with iDrive and compatible with other iDrive-compatible storage services. ',
  price: 'Free',
  tags: 'Storage',
  category: 'Storage',
  inputs: {
    title: 'Configure iDrive S3',
    items: [
      {
        key: 'getEndpoint',
        label: 'iDrive S3 Endpoint',
        placeholder: 'iDrive S3 Endpoint',
        type: XcType.SingleLineText,
        required: true,
      },
      {
        key: 'port',
        label: 'Port',
        placeholder: 'Port',
        type: XcType.Number,
        required: true,
      },
      {
        key: 'bucket',
        label: 'Bucket Name',
        placeholder: 'Bucket Name',
        type: XcType.SingleLineText,
        required: true,
      },
      {
        key: 'access_key',
        label: 'Access Key',
        placeholder: 'Access Key',
        type: XcType.SingleLineText,
        required: true,
      },
      {
        key: 'access_secret',
        label: 'Access Secret',
        placeholder: 'Access Secret',
        type: XcType.Password,
        required: true,
      },
      {
        key: 'useSSL',
        label: 'Use SSL',
        placeholder: 'Use SSL',
        type: XcType.Checkbox,
        required: true,
      },
    ],
    actions: [
      {
        label: 'Test',
        placeholder: 'Test',
        key: 'test',
        actionType: XcActionType.TEST,
        type: XcType.Button,
      },
      {
        label: 'Save',
        placeholder: 'Save',
        key: 'save',
        actionType: XcActionType.SUBMIT,
        type: XcType.Button,
      },
    ],
    msgOnInstall:
      'Successfully installed and attachment will be stored in iDrive S3',
    msgOnUninstall: '',
  },
};

export default config;