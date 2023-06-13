const envVars = {
    // default values
    STAGE: 'dev',
    AWS_DEFAULT_REGION: 'ap-northeast-1',
    OPENAI_API_KEY: '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',
    ...process.env,
}

export default Object.freeze(envVars)
